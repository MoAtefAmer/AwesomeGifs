import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GifCard } from '../../components/Gif';
import { Grid, Input, Menu, Loader } from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { gifsActions } from '../../actions/gifs.actions';

class HomePage extends Component {
  state = {
    limit: 16,
    offset: 0,
   
    query: '',
    ogLimit: 16,
    ogOffset: 0,
  };

  handleChange = async (e, { name, value }) => {

    // Always reset the offset and limit whenever a new search query is inputted
   
    const { ogLimit, ogOffset } = this.state;

    this.setState({ [name]: value });
    this.setState({ limit: ogLimit, offset: ogOffset });

    await this.props.clearStore();
    await this.props.staticSearch(
      this.state.limit,
      this.state.offset,
      this.state.query
    );

    if (this.state.query.length === 0) {
      await this.props.clearStore();
      await this.props.getTrending(this.state.limit, this.state.offset);
    }
  };

  fetchMoreGifs = async () => {
  
    
// If there is no search query then load infinitly normally
    if (this.state.query.length === 0) {
      this.setState({ offset: this.state.offset + this.state.limit });

      await this.props.getTrending(this.state.limit, this.state.offset);
    }


    // If there is a search query then load more results according to the search query
    if (
      this.state.query.length > 0 &&
      this.props.gifsReducer.pagination.offset <=
        this.props.gifsReducer.pagination.total_count
    ) {
      this.setState({ offset: this.state.offset + this.state.limit });

      await this.props.search(
        this.state.limit,
        this.state.offset,
        this.state.query
      );
    }
  };

  async componentDidMount() {
    await this.props.getTrending(this.state.limit, this.state.offset);
    this.setState({ typedInSearch: false });
  }

  render() {
    // Load the gifs from the reducer
    const gifPieces =
      this.props.gifsReducer.isLoaded && this.props.gifsReducer.gifs;

      

    const gifCount =
      this.props.gifsReducer.isLoaded &&
      this.props.gifsReducer.pagination &&
      this.props.gifsReducer.pagination.offset;

    //Infinite Scrolling and mapping
    // Usually the navbar would be a seperate component but since this is a demo application with only one page lets do it here
    return (
      <div>
        <Menu color="black">
          <Menu.Item
            name="home"
            onClick={() => {
              window.location.reload();
            }}
          />

          <Menu.Menu position="right">
            <Input
              name="query"
              type="text"
              onChange={this.handleChange}
              icon="search"
              placeholder="Search..."
            />
          </Menu.Menu>
        </Menu>
        <Grid container>
          <h1 style={{ fontSize: '50px', transform: 'translate(1vw,5vh)' }}>
            {this.state.query.length === 0
              ? 'Trending'
              : 'Searching for ' + this.state.query}
          </h1>

          <InfiniteScroll
            dataLength={gifCount}
            next={this.fetchMoreGifs}
            hasMore={true}
            loader={<Loader />}
          />

          <Grid.Row>
            {gifPieces &&
              gifPieces.map((card, i) => (
                <GifCard
                  id={card.id}
                  key={i}
                  imageUrl={card.images.downsized_medium.url}
                  isLoaded={true}
                  
                />
              ))}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapState = (state) => ({
  gifsReducer: state.gifsReducer,
});

const actionCreators = {
  getTrending: gifsActions.fetchTrendingGifs,
  staticSearch: gifsActions.staticSearchGifs,
  clearStore: gifsActions.clearStore,
  search: gifsActions.searchGifs,
};

const conntectedHomePage = connect(mapState, actionCreators)(HomePage);

export { conntectedHomePage as HomePage };
