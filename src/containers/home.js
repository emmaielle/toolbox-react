import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state) => {
    const { mirrorReducer } = state;
    
    return {
        mirrorReducer
    };
}

const HomeConnect = connect(mapStateToProps)(Home);

export default HomeConnect;
