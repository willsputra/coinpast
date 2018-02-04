import { Header, Card } from "semantic-ui-react";
import Price from "../components/Price";
import Layout from "../components/Layout";

class Index extends React.Component {
  getLastYearDate() {
    const currDateTime = new Date();
    const lastYear = currDateTime.getFullYear() - 1;
    const lastYearDate = `${lastYear}-${(
      "0" +
      (currDateTime.getMonth() + 1)
    ).slice(-2)}-${("0" + currDateTime.getDate()).slice(-2)}`;

    return lastYearDate;
  }

  getLastMonthDate() {
    const currDateTime = new Date();
    const lastMonthDate = `${currDateTime.getFullYear()}-${(
      "0" + currDateTime.getMonth()
    ).slice(-2)}-${("0" + currDateTime.getDate()).slice(-2)}`;

    return lastMonthDate;
  }

  render() {
    return (
      <Layout>
        <Card.Group>
          <Price period={this.getLastMonthDate()} description="Last Month" />
          <Price period={this.getLastYearDate()} description="Last Year" />
        </Card.Group>
      </Layout>
    );
  }
}

export default Index;
