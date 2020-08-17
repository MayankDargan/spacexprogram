import React from 'react';
// import data from './data.json';
import Content from './content';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import axios from 'axios';
import ls from 'local-storage';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:[],
      filters:{year:'',successful_landing:'', successful_launch:''}
    };
    this.filterByYear = this.filterByYear.bind(this);
    this.successfulLandingFilter = this.successfulLandingFilter.bind(this);
    this.successfulLaunchFilter = this.successfulLaunchFilter.bind(this);
  }

  componentWillMount(){
    let urlFilters = '';
    let filters = '';
    if(ls.get('filters')){
      filters = JSON.parse(ls.get('filters'));
    }
    if(filters.successful_landing !== '' && filters !== ''){
      urlFilters+='&land_success='+filters.successful_landing;
    }
    if(filters.successful_launch !== '' && filters !== ''){
      urlFilters+='&launch_success='+filters.successful_launch;
    }
    if(filters.year !== '' && filters !== ''){
      urlFilters+='&launch_year='+filters.year;
    }
    axios.get('https://api.spaceXdata.com/v3/launches?limit=100'+urlFilters)
    .then((response)=>{
      this.setState({
        data: response
      });
    });
  }

  filterByYear(e){
    let filterValue = e.currentTarget.innerText;
    let {filters} = this.state;
    filters.year = filterValue;
    if(ls.get('filters')){
      ls.remove('filters');
      ls.set('filters', JSON.stringify(filters));
    } else{
      ls.set('filters', JSON.stringify(filters));
    }
    this.setState({
      filters : filters
    });
    let urlFilter = '';
    if(filters.successful_landing !== ''){
      urlFilter+='&land_success='+filters.successful_landing;
    }
    if(filters.successful_launch !== ''){
      urlFilter+='&launch_success='+filters.successful_launch;
    }
    if(filters.year !== ''){
      urlFilter+='&launch_year='+filters.year;
    }
    axios.get(`https://api.spacexdata.com/v3/launches?limit=100${urlFilter}`)
    .then((response)=>{
      this.setState({
        data: response
      });
    });
  }

  successfulLaunchFilter(e){
    let filterValue = e.currentTarget.innerText;
    let {filters} = this.state;
    filters.successful_launch = filterValue;
    
    if(ls.get('filters')){
      ls.remove('filters');
      ls.set('filters',JSON.stringify(filters));
    } else{
      ls.set('filters', JSON.stringify(filters));
    }
    this.setState({
      filters : filters
    });
    let urlFilter = '';
    if(filters.successful_landing !== ''){
      urlFilter+='&land_success='+filters.successful_landing;
    }
    if(filters.successful_launch !== ''){
      urlFilter+='&launch_success='+filters.successful_launch;
    }
    if(filters.year !== ''){
      urlFilter+='&launch_year='+filters.year;
    }
    axios.get(`https://api.spacexdata.com/v3/launches?limit=100${urlFilter}`)
    .then((response)=>{
      this.setState({
        data: response
      });
    });
  }

  successfulLandingFilter(e){
    let filterValue = e.currentTarget.innerText;
    let {filters} = this.state;
    filters.successful_landing = filterValue;
    if(ls.get('filters')){
      ls.remove('filters');
      ls.set('filters',JSON.stringify(filters));
    } else{
      ls.set('filters', JSON.stringify(filters));
    }
    this.setState({
      filters : filters
    });
    let urlFilter = '';
    if(filters.successful_landing !== ''){
      urlFilter+='&land_success='+filters.successful_landing;
    }
    if(filters.successful_launch !== ''){
      urlFilter+='&launch_success='+filters.successful_launch;
    }
    if(filters.year !== ''){
      urlFilter+='&launch_year='+filters.year;
    }
    axios.get(`https://api.spacexdata.com/v3/launches?limit=100${urlFilter}`)
    .then((response)=>{
      this.setState({
        data: response
      });
    });
  }

  render(){
    return(<div>
      <header><h1>Spacex Launch Programs</h1></header>
        <Container>
          <Row>
            <Col className="filters-container" md={3}>
              <h5>Filters</h5>
              <aside>
                {/* Year filter */}
                <section>
                  <h6>Launch Year</h6>
                  <hr></hr>
                  <Row>
                    <Col><span onClick={this.filterByYear} className="filter">2006</span></Col>
                    <Col><span  onClick={this.filterByYear} className="filter">2007</span></Col>
                  </Row>
                  <Row>
                    <Col><span  onClick={this.filterByYear} className="filter">2008</span></Col>
                    <Col><span  onClick={this.filterByYear} className="filter">2009</span></Col>
                  </Row>
                  <Row>
                    <Col><span  onClick={this.filterByYear} className="filter">2010</span></Col>
                    <Col><span  onClick={this.filterByYear} className="filter">2011</span></Col>
                  </Row>
                  <Row>
                    <Col><span  onClick={this.filterByYear} className="filter">2012</span></Col>
                    <Col><span  onClick={this.filterByYear} className="filter">2013</span></Col>
                  </Row>
                  <Row>
                    <Col><span  onClick={this.filterByYear} className="filter">2014</span></Col>
                    <Col><span  onClick={this.filterByYear} className="filter">2015</span></Col>
                  </Row>
                  <Row>
                    <Col><span  onClick={this.filterByYear} className="filter">2016</span></Col>
                    <Col><span  onClick={this.filterByYear} className="filter">2017</span></Col>
                  </Row>
                  <Row>
                    <Col><span  onClick={this.filterByYear} className="filter">2018</span></Col>
                    <Col><span  onClick={this.filterByYear} className="filter">2019</span></Col>
                  </Row>
                  <Row>
                    <Col><span  onClick={this.filterByYear} className="filter">2020</span></Col>
                  </Row>
                </section>
                {/* Successful launch */}
                <section>
                  <h6>Successful Launch</h6>
                  <hr></hr>
                  <Row>
                    <Col><span onClick={this.successfulLaunchFilter} className="filter">True</span></Col>
                    <Col><span onClick={this.successfulLaunchFilter} className="filter">False</span></Col>
                  </Row>
                </section>
                {/* Successful landing */}
                <section>
                <h6>Successful Landing</h6>
                  <hr></hr>
                  <Row>
                    <Col><span onClick={this.successfulLandingFilter} className="filter">True</span></Col>
                    <Col><span onClick={this.successfulLandingFilter} className="filter">False</span></Col>
                  </Row>
                </section>
              </aside>
            </Col>
            <Col md={9}  className="content">
              <Content data={this.state.data} />
            </Col>
          </Row>
        </Container>
        </div>
      );
  }
}
export default App;
