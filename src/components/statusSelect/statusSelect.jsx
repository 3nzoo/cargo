import styles from './statusSelect.module.css';

const StatusSelect = ({ value, onChange }) => {
  const statuses = [
    'New',
    'In Transit',
    'Rejected',
    'Failed Delivery',
    'Delivered',
  ];

  return (
    <div className={styles.status}>
      <label htmlFor='status'>Delivery Status: </label>
      <select id='status' value={value} onChange={onChange}>
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StatusSelect;
