import React, {Component} from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2';
import { connect } from "react-redux";
// import { Body, Container} from './Styles';



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
      // const filteredMappingLabels = MappingLable.filter(obj => { obj != undefined})

    
    this.state ={
                  // chartData:{
                  //   labels:[ 'gas','water', 'health', 'internet', 'dental', 'gym'],

                    chartData:{
                    
                      //labels:[ MappingLable[0], MappingLable[1], MappingLable[2], MappingLable[3], MappingLable[4], MappingLable[6]],
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
      {/* <Body>
        <Container> */}
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
        {/* </Container>
      </Body> */}
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

