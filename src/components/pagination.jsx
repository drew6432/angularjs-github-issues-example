import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import '../styles/Issue.css';
import PaginationItem from './pagination-item';


class Pagination extends Component {

    render() {
        const { setPage, pager={}, pager: { currentPage, pages, totalPages }, } = this.props;

        if (!pager.pages || pager.pages.length <= 1) {
            return null;
        }
        
        return (
            <div>
                <Row className="animated easeIn">
                    <Col xs={12}>
                        <div>
                        <ul className="pagination">
                            <PaginationItem isDisabled={currentPage === 1} display={'First'} pageNum={1} setPage={setPage}/>
                            <PaginationItem isDisabled={currentPage === 1} display={'Previous'} pageNum={currentPage - 1} setPage={setPage}/>
                        {pages.map((page, index) =>
                            <PaginationItem index={page} isActive={currentPage === page} display={page} pageNum={page} setPage={setPage}/>
                        )}
                        <PaginationItem isDisabled={currentPage === totalPages} display={'Next'} pageNum={currentPage + 1} setPage={setPage}/>
                        <PaginationItem isDisabled={currentPage === totalPages} display={'Last'} pageNum={totalPages} setPage={setPage}/>
                    </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
};

Pagination.propTypes = {
    setPage: PropTypes.func,
    pager: PropTypes.object
};

export default Pagination;
