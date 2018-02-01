import Fetch from "isomorphic-unfetch";
import { Header, Card } from "semantic-ui-react";
import Price from "../components/Price";
import Layout from "../components/Layout";

class Index extends React.Component {
  static async getInitialProps() {
    const currDateTime = new Date();

    //lastYear
    const lastYear = currDateTime.getFullYear() - 1;
    const lastYearDate = `${lastYear}-${("0" + (currDateTime.getMonth() + 1 )).slice(
      -2
    )}-${("0" + currDateTime.getDate()).slice(-2)}`;

    const lastYearPrice = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${lastYearDate}&end=${lastYearDate}`;
    const lastYearRes = await fetch(lastYearPrice);
    const lastYearData = await lastYearRes.json();

    //lastMonth
    const lastMonthDate = `${currDateTime.getFullYear()}-${(
      "0" +
      (currDateTime.getMonth())
    ).slice(-2)}-${("0" + currDateTime.getDate()).slice(-2)}`;

    const lastMonthPrice = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${lastMonthDate}&end=${lastMonthDate}`;
    const lastMonthRes = await fetch(lastMonthPrice);
    const lastMonthData = await lastMonthRes.json();

    return {
      lastYearBpi: lastYearData.bpi,
      lastMonthBpi: lastMonthData.bpi,
    };
  }

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
      "0" +
      (currDateTime.getMonth())
    ).slice(-2)}-${("0" + currDateTime.getDate()).slice(-2)}`;

    return lastMonthDate;
  }

  render() {
    return (
      <Layout> 
        <Header as='h1'>Past Bitcoin Price </Header>
        <Card.Group>
          <Price bpi={this.props.lastMonthBpi} period={this.getLastMonthDate()} periodDesc="Last Month" />
          <Price bpi={this.props.lastYearBpi} period={this.getLastYearDate()} periodDesc="Last Year" />
        </Card.Group>
      </Layout>
    );
  }
}

export default Index;
