import React, {Component} from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2';
import { connect } from "react-redux";
import { ChartDiv} from './Styles';

class Chart extends Component {
  constructor(props){
    super(props);

    const mapping = this.props.payments.map(obj =>{
      return obj.cost
      })

    const MappingLable  = this.props.payments.map(obj =>{
      return obj.billName
      })
      console.log(MappingLable)

    this.state ={
                    chartData:{
                    labels:MappingLable,
                    datasets:[ {
                                lable:'$',
                                data:[ mapping[0], mapping[1], mapping[2], mapping[3], mapping[4], mapping[6]],
                    backgroundColor:[
                            'forestgreen',
                            'darkorange',
                            'indianred',
                            'lightcoral',
                            '	lightskyblue',
                            'bg-gradient-info',
                                    ]//end of bg color
                                  }                                                      
        ]
      }
    }
  }

  static defaultProps = {
    displayTitle: true,
    dispalyLegend:true,
    legendPosition:'right'
    
  };
  render() {
    return (
      <>
        <ChartDiv>
          <div className="chart">
            <Bar
                data={this.state.chartData}            
                options={{ 
                  title:{
                    display:this.props.displayTitle,
                    text:'Charts',
                    fontSize:25
                  },
                  leggend:{
                    display: this.props.dispalyLegend,
                    position:this.props.legendPosition
                  }
                  }}
              />
          </div>
          </ChartDiv>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    totalCost: state.totalCost,
    payments: state.payments,
  };
};

export default connect(mapStateToProps, null) (Chart);

