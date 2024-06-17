import { useState, useEffect } from "react";
var usePagination = function (_a) {
    var contentPerPage = _a.contentPerPage, count = _a.count;
    var _b = useState(1), page = _b[0], setPage = _b[1];
    var _c = useState({
        before: false,
        paginationGroup: [],
        after: true,
    }), gaps = _c[0], setGaps = _c[1];
    var pageCount = Math.ceil(count / contentPerPage);
    var lastContentIndex = page * contentPerPage;
    var firstContentIndex = lastContentIndex - contentPerPage;
    var _d = useState([]), pagesInBetween = _d[0], setPagesInBetween = _d[1];
    useEffect(function () {
        if (pageCount > 2) {
            var temp = new Array(pageCount - 2).fill(1).map(function (_, i) { return i + 2; });
            setPagesInBetween(temp);
        }
    }, [pageCount]);
    useEffect(function () {
        var currentLocation = pagesInBetween.indexOf(page);
        var paginationGroup = [];
        var before = false;
        var after = false;
        if (page === 1) {
            paginationGroup = pagesInBetween.slice(0, 3);
        }
        else if (page === pageCount ||
            page === pageCount - 1 ||
            page === pageCount - 2) {
            paginationGroup = pagesInBetween.slice(-3, pageCount);
        }
        else if (page === 2) {
            paginationGroup = pagesInBetween.slice(currentLocation, currentLocation + 3);
        }
        else {
            paginationGroup = [page - 1, page, page + 1];
        }
        if (pageCount <= 5) {
            before = false;
            after = false;
        }
        else {
            before = false;
            after = false;
            if (paginationGroup[0] > 2) {
                before = true;
            }
            if (paginationGroup[2] < pageCount - 1) {
                after = true;
            }
        }
        setGaps({ paginationGroup: paginationGroup, before: before, after: after });
    }, [page, pagesInBetween, pageCount]);
    var changePage = function (direction) {
        setPage(function (state) {
            if (direction) {
                if (state === pageCount) {
                    return state;
                }
                return state + 1;
            }
            else {
                if (state === 1) {
                    return state;
                }
                return state - 1;
            }
        });
    };
    var setPageSAFE = function (num) {
        if (num > pageCount) {
            setPage(pageCount);
        }
        else if (num < 1) {
            setPage(1);
        }
        else {
            setPage(num);
        }
    };
    return {
        totalPages: pageCount,
        nextPage: function () { return changePage(true); },
        prevPage: function () { return changePage(false); },
        setPage: setPageSAFE,
        firstContentIndex: firstContentIndex,
        lastContentIndex: lastContentIndex,
        page: page,
        gaps: gaps,
    };
};
export default usePagination;
