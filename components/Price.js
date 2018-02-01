import { Card } from 'semantic-ui-react';


class Price extends React.Component {
  

  render() {

    return (
        <Card>
          <Card.Content>
            <Card.Header>
            USD {this.props.bpi[this.props.period]}
            </Card.Header>
            <Card.Description>
              {this.props.periodDesc}
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

export default Price;
