import { Card } from "semantic-ui-react";
import Fetch from "isomorphic-unfetch";

class Price extends React.Component {
  constructor() {
    super();
    this.state = {
      price: ""
    };
  }

  componentWillMount() {
    let period = this.props.period;

    fetch(
      `https://api.coindesk.com/v1/bpi/historical/close.json?start=${period}&end=${period}`
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ price: data.bpi[period] });
      });
  }

  render() {
    return (
      <Card centered style={{ height: "150px", paddingTop: "40px" }}>
        <Card.Content>
          <Card.Header>USD {this.state.price}</Card.Header>
          <Card.Description>
            {this.props.description} | {this.props.period}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default Price;
