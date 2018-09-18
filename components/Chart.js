import {Bar, Line, Pie} from 'react-chartjs-2';

export default class Chart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:props.chartData,
            btcData:props.btcData
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'right',
        location:'City'
    };


    render(){
        return (
            <div className="chart">
                <p>something </p>
                {this.state.btcData}
                {this.props.btcData}
                {/*<Line*/}
                    {/*data={this.state.chartData}*/}
                    {/*options={{*/}
                        {/*title:{*/}
                            {/*display:this.props.displayTitle,*/}
                            {/*text:'Largest Cities In '+this.props.location,*/}
                            {/*fontSize:25*/}
                        {/*},*/}
                        {/*legend:{*/}
                            {/*display:this.props.displayLegend,*/}
                            {/*position:this.props.legendPosition*/}
                        {/*}*/}
                    {/*}}*/}
                {/*/>*/}
                {this.state.btcData}
                <Line
                    data={this.state.btcData}
                    options={{
                        title:{
                            display: true,
                            text:'BTC Chart',
                            fontSize:25
                        }
                    }}
                />
            </div>
        )
    }
}

