import React from 'react';
import './balance-list-item.sass';
import { onShowDetails } from '../../actions';
import { connect } from 'react-redux';

const BalanceListItem = ({account, onShowDetails, selectedItem, selectedPayment}) => {
	const {title, balance, currency} = account;
	
	let classActive 
	if(selectedItem && currency === selectedItem.currency){
		classActive = 'active'
	}
	if(selectedPayment && currency === selectedPayment.currency && !selectedItem){
		classActive = 'active'
	}

	return (
		<div className={`${classActive} ${'balance-item'}`} onClick={() => onShowDetails(account)}>
		<div className={`${currency} ${'balance-title'}`}>{title}</div>
		<div className={`${currency} ${'balance-amount'}`}>{balance}</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		onShowDetails: (account) => dispatch(onShowDetails(account)),
	}
}
const mapStateToProps = ({banking: {selectedItem}}) => {
	return{
		selectedItem
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(BalanceListItem);

