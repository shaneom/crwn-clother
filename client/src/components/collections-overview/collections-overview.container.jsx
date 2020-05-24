import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner';
import CollectionOverview from '../../components/collections-overview/collections-overview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching,
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
