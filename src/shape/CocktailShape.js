import PropTypes from 'prop-types';
import ComponentShape from './ComponentShape';

export default PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  components: PropTypes.arrayOf(ComponentShape),
  note: PropTypes.string,
});
