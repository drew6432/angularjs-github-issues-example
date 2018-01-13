import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap';
// import UserProfilePic from './user-profile-pic';
// import marked from 'marked';
import '../styles/Issue.css';
import PaginationItem from './pagination-item';


class Pagination extends Component {

    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }

    // componentWillMount() {
    //     // set page if items array isn't empty
    //     if (this.props.items && this.props.items.length) {
    //         setPage(this.props.initialPage);
    //     }
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     // reset page if items array has changed
    //     if (this.props.items !== prevProps.items) {
    //         setPage(this.props.initialPage);
    //     }
    // }


    // setPage(page) {
    //     var items = this.props.items;
    //     var pager = this.state.pager;

    //     if (page < 1 || page > totalPages) {
    //         return;
    //     }

    //     // get new pager object for specified page
    //     pager = this.getPager(items.length, page);

    //     // get new page of items from items array
    //     var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    //     // update state
    //     this.setState({ pager: pager });

    //     // call change page function in parent component
    //     this.props.onChangePage(pageOfItems);
    // }

    

    render() {
        // const { expanded } = this.state;
        const { setPage, pager: { currentPage, pages, totalPages } } = this.props;
        var pager = this.props.pager;

        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }
        
        return (
            <div>
                <Row className="animated easeIn">
                    <Col xs={12}>
                        <div>
                        <ul className="pagination">
                            <PaginationItem isDisabled={currentPage == 1} display={'First'} pageNum={1} setPage={setPage}/>
                            <PaginationItem isDisabled={currentPage == 1} display={'Previous'} pageNum={currentPage - 1} setPage={setPage}/>
                        {pages.map((page, index) =>
                            <PaginationItem index={page} isActive={currentPage == page} display={page} pageNum={page} setPage={setPage}/>
                        )}
                        <PaginationItem isDisabled={currentPage == totalPages} display={'Next'} pageNum={currentPage + 1} setPage={setPage}/>
                        <PaginationItem isDisabled={currentPage == totalPages} display={'Last'} pageNum={totalPages} setPage={setPage}/>
                    </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
};

Pagination.propTypes = {
    // children: PropTypes.oneOfType([
    //     PropTypes.arrayOf(PropTypes.node),
    //     PropTypes.node
    // ])
};

export default Pagination;
