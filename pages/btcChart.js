import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Chart from '../components/Chart';

const BtcChart = (props) => (

    <Layout>
        <h1>About BTC-prices</h1>
            <p>BTC chart showing the price over the last 30 days.
            </p>
        <p>
            keys {props.bla}
        <br/>
            values {props.alb}
        </p>
        <Chart btcData={props.btcData} />
    </Layout>
);

BtcChart.getInitialProps = async function() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json');
    const data = await res.json();
    const keyss = Object.keys(data.bpi);
    const valuess = Object.values(data.bpi);

    const res2 = await fetch('http://localhost:3000/admin/health');
    const data2 = await res2.json();
    const blakeys = Object.keys(data2);
    const bla = blakeys[0];
    const alb = Object.values(data2)[0];



    const btcData = {
        labels: keyss,
        datasets:[
            {
                label:'BTC Price',
                data: valuess,
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ]
            }
        ]
    };

    return {
        btcData: btcData,
        bla: bla,
        alb: alb
    };
};


export default BtcChart;