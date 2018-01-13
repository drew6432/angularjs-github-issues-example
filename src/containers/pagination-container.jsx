import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-bootstrap';
import { getPagination } from '../selectors/pagination-selector';
import Pagination from '../components/pagination';
import { handlePaginationClick } from '../actions/pagination-action-creators';
import { range, get } from 'lodash';

export class PaginationContainer extends Component {

    setPage = (pageNum) => {
        this.props.handlePaginationClick(pageNum);
        console.log('page click');
    }
    getPager(totalPages, currentPage) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        // pageSize = pageSize || 10;

        // calculate total pages
        // var totalPages = Math.ceil(totalItems / pageSize);

        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        var startIndex = (currentPage - 1);
        var endIndex = Math.min(startIndex - 1, totalPages - 1);

        // create an array of pages to ng-repeat in the pager control
        var pages = range(startPage, parseInt(endPage) + 1);

        // return object with all pager properties required by the view
        return {
            // totalItems: totalItems,
            currentPage: currentPage,
            // pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        const { pagination } = this.props;
        const pager = this.getPager(get(pagination, 'last.pageNum', pagination.current.pageNum), pagination.current.pageNum);
        // const pager = this.getPager(12, pagination.current.pageNum, 10);
        return (
            <div><Pagination pagination={this.props.pagination} setPage={this.setPage} pager={pager}/></div>
        );
    }
};

PaginationContainer.propTypes = {
    issues: PropTypes.array
};

const mapStateToProps = (state) => ({
    pagination: getPagination(state)
});

const mapDispatchToProps = (dispatch) => ({
    handlePaginationClick: (pageNum) => dispatch(handlePaginationClick(pageNum))
})

export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer);
