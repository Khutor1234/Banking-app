import React from 'react';
import './account-info.sass';
import { Link } from 'react-router-dom';
import AccountTransaction from '../account-transaction';
import AccountMetaInfo from '../account-meta-info';
import { connect } from 'react-redux';

const AccountInfo= ({selectedItem}) => {
	if(selectedItem){

		const {balance, title, currency} = selectedItem

		return (
		<div className='balance'>
			<h2 className='balance-header'>Balance</h2>
			<div className='balance-info'>
				<span className={`${currency} ${'balance-info-amount'}`}>{balance}</span>
				<Link to="/top-up" className="balance-info-link">
					<svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M27.5428 12.2767H26.0918C25.659 11.1997 25.0294 10.2465 24.2523 9.44955L25.1819 5.38391H23.608C22.1619 5.38391 20.8831 6.11088 20.0174 7.23095C19.6436 7.17172 19.2747 7.1071 18.8862 7.1071H12.5904C8.78344 7.1071 5.61097 10.0688 4.8781 13.9998H2.75328C2.02534 13.9998 1.44987 13.2729 1.59742 12.449C1.70563 11.8351 2.23192 11.4151 2.80247 11.4151H2.85166C3.01397 11.4151 3.14677 11.2697 3.14677 11.092V10.015C3.14677 9.83727 3.01397 9.69187 2.85166 9.69187C1.44987 9.69187 0.200552 10.7904 0.023484 12.309C-0.192933 14.1506 1.1154 15.723 2.75328 15.723H4.72071C4.72071 18.534 5.97002 21.0057 7.86859 22.5781V26.9237C7.86859 27.3976 8.22272 27.7853 8.65555 27.7853H11.8034C12.2363 27.7853 12.5904 27.3976 12.5904 26.9237V24.3389H18.8862V26.9237C18.8862 27.3976 19.2403 27.7853 19.6731 27.7853H22.821C23.2538 27.7853 23.608 27.3976 23.608 26.9237V22.5781C24.1884 22.0988 24.7048 21.5334 25.1475 20.8926H27.5428C27.9757 20.8926 28.3298 20.5049 28.3298 20.031V13.1382C28.3298 12.6644 27.9757 12.2767 27.5428 12.2767ZM21.2471 15.723C20.8142 15.723 20.4601 15.3353 20.4601 14.8614C20.4601 14.3876 20.8142 13.9998 21.2471 13.9998C21.6799 13.9998 22.034 14.3876 22.034 14.8614C22.034 15.3353 21.6799 15.723 21.2471 15.723ZM12.5904 5.38391H18.8862C19.1518 5.38391 19.4124 5.40545 19.6682 5.42699C19.6682 5.41084 19.6731 5.40007 19.6731 5.38391C19.6731 2.52989 17.5581 0.214355 14.9513 0.214355C12.3445 0.214355 10.2295 2.52989 10.2295 5.38391C10.2295 5.49699 10.2541 5.60469 10.259 5.71778C11.0066 5.50776 11.7838 5.38391 12.5904 5.38391Z" fill="#FD3A6C"/>
					</svg>
					<span>Top Up</span>
				</Link>
			</div>
			<h3 className='balance-transaction'>Quick Transaction</h3>
			<AccountTransaction selectedItem = {selectedItem}/>
			<AccountMetaInfo type={'Personal'} currency={title} saving ={Math.floor(Math.random() * 100)} numberUsers={Math.floor(Math.random() * 10)}/>
		</div>
	);
  }

  return null
};

const mapStateToProps = ({banking: {selectedItem}}) => {
	return{
		selectedItem
	}
};

export default connect(mapStateToProps, null)(AccountInfo);
  