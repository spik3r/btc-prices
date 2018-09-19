import {Line} from 'react-chartjs-2';

export default class Chart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            btcData:props.btcData
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'right',
    };


    render(){
        console.log(this.state.btcData);
        return (
            <div className="chart">

                <Line
                    data={this.state.btcData}
                    options={{
                        title:{
                            display: true,
                            text:'BTC Chart',
                            fontSize:25
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                        }
                    }}
                />
            </div>
        )
    }
}

