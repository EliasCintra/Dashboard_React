import React, { Component } from 'react';
import Dashbord from './Dashbord';

class App extends Component {
  render() {
    //definindo informações do eixo X e Y do Gráfico
    const data = [
      {
        xField: "Janeiro",
        yField: 100
      },
      {
        xField: "Fevereiro",
        yField: 80
      },
      {
        xField: "Março",
        yField: 76
      },
      {
        xField: "Abril",
        yField: 90
      },
      {
        xField: "Maio",
        yField: 97
      },
      {
        xField: "Junho",
        yField: 62
      },
      {
        xField: "Julho",
        yField: 31
      },
      {
        xField: "Agosto",
        yField: 69
      },
      {
        xField: "Setembro",
        yField: 71
      },
      {
        xField: "Outubro",
        yField: 95
      },
      {
        xField: "Novembro",
        yField: 77
      },
      {
        xField: "Dezembro",
        yField: 87
      }
    ];

    return (
      // Tamanho da grade do Gráfico
      <div className="App">
        <Dashbord
          width="800"
          height="500"
          title="Grafico de vendas anual"
          data={data}
          xRange={[0, 760]}
          xDomain={data.map((s) => s.xField)}
          yRange={[340, 0]}
          yDomain={[0, 100]}> 
        </Dashbord>
      </div>
    );
  }
}

export default App;
