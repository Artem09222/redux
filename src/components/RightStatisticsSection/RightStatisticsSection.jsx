import { useSelector, useDispatch } from 'react-redux';
import DeleteListBtn from './DeleteListButton/DeleteListButton';
import PlusBtn from './PlusBtn/PlusBtn';
import styles from './RightStatisticsSection.module.css';
import { deleteT } from '../redux/actions';

const RightStatisticsSection = () => {
    const transactions = useSelector((state) => state.transactions.transactions);
    console.log(transactions);
    
    const dispatch = useDispatch();

    const deleteTransaction = (id) => {
        dispatch(deleteT(id));
    };

    return (
        <div className={styles.rightStatisticsSection}>
            <div className={styles.contentWrapper}>
                <div className={styles.header}>
                    <div className={styles.headerItem}>Date</div>
                    <div className={styles.headerItem}>Type</div>
                    <div className={styles.headerItem}>Category</div>
                    <div className={styles.headerItem}>Comment</div>
                    <div className={styles.headerItem}>Sum</div>
                    <div className={styles.headerItem}></div>
                </div>

                {transactions.length === 0 ? (
                    <div className={styles.empty}>No transactions yet</div>
                ) : (
                    transactions.map((record) => (
                        <div key={record.id} className={styles.record}>
                            <div className={styles.date}>{record.date}</div>
                            <div className={styles.type}>
                                {record.type === 'Income' ? '+' : '-'}
                            </div>
                            <div className={styles.category}>{record.category}</div>
                            <div className={styles.comment}>{record.comment}</div>
                            <div className={styles[record.sumClass]}>{record.sum}</div>
                            <DeleteListBtn deleteList={() => deleteTransaction(record.id)} />
                        </div>
                    ))
                )}

                <PlusBtn />
            </div>
        </div>
    );
};

export default RightStatisticsSection;
