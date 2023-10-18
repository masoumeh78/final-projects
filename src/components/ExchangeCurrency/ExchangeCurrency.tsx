import React, { useEffect, useState } from 'react';
import './ExchangeCurrency.css';

function ExchangeCurrency() {

    let appName = "Exchange Currency";

    let [rialValue, setRialValue] = useState(0);
    let [usdValue, setUsdValue] = useState(0);
    let [usdValueInput, SetUsdValueInput] = useState<any>();


    const fetchPrice = () => {

        fetch("http://api.navasan.tech/latest/?api_key=free7w7paxQMtX32WF346IEeOpPbgeG9 ")
            .then(result => {
                return result.json();
            })

            .then(data => {

                // find usd among all items

                let usdItem = data.usd_sell.value;


                // let usdItem = data.sana.data.find((i: { slug: string; }) => i.slug === 'sana_buy_usd');
                // let usd = parseInt(usdItem.p);

                setUsdValue(usdItem);
                setRialValue(parseInt(usdValueInput) * usdItem);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        localStorage.setItem('rialValue', JSON.stringify(rialValue))
        console.log(localStorage);

    }, [rialValue])

    return (
        <div>
            <>
                <div className="App">
                    <nav className="toolbar">
                        <h3>{appName}</h3>
                    </nav>

                    <div className='container'>

                        <div className="output-container">
                            <div className="rial-price-output">Price: <strong>{rialValue}</strong> <small> rial</small></div>
                            <div className="usd-price-output">USD: <strong>{usdValue}</strong> <small> USD</small></div>
                        </div>

                        <input
                            type="number"
                            className="usd-price-input"
                            value={usdValueInput}
                            onChange={e => { SetUsdValueInput(e.target.value) }}

                            placeholder="Enter USD price..."
                        />

                        <button className="btn-convert" onClick={fetchPrice} >
                            Convert
                        </button>

                    </div>

                </div>
            </>
        </div>
    )
}

export default ExchangeCurrency