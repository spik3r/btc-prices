import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Chart from '../components/Chart';

const About = (props) => (

    <Layout>
        <h1>About BTC-prices</h1>
            <p>Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.
                Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter
                furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.
            </p>
        <p>
            {/*props.keys = {props.bpi.keys} <br/>*/}
            {/*props.values = {props.bpi.values}  <br/>*/}
            {/*data = {props.data}*/}
        </p>
        <Chart chartData={props.chartData} bpi={props.bpi} btcData={props.data} location="Massachusetts" legendPosition="bottom"/>
    </Layout>
);

About.getInitialProps = async function() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json');
    console.log("res: " + res);
    const data = await res.json();
    const keys = Object.keys(data.bpi);
    const values = Object.values(data.bpi);

    console.log("data: " + data);

    const chartDataa = {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
            {
                label:'Population',
                data:[
                    617594,
                    181045,
                    153060,
                    106519,
                    105162,
                    95072
                ],
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

    // const btcData = {
    //     labels: [keys],
    //     datasets:[
    //         {
    //             label:'BTC Price',
    //             data: [values],
    //             backgroundColor:[
    //                 'rgba(255, 99, 132, 0.6)',
    //                 'rgba(54, 162, 235, 0.6)',
    //                 'rgba(255, 206, 86, 0.6)',
    //                 'rgba(75, 192, 192, 0.6)',
    //                 'rgba(153, 102, 255, 0.6)',
    //                 'rgba(255, 159, 64, 0.6)',
    //                 'rgba(255, 99, 132, 0.6)'
    //             ]
    //         }
    //     ]
    // };

    return {
        data: data,
        chartData: chartDataa
        // btcData: btcData
    };
};


export default About;