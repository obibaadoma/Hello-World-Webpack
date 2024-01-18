// app/javascript/components/Greeting.jsx
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRandomGreeting } from '../redux/actions';

const Greeting = ({ greeting, loading, error, fetchRandomGreeting }) => {
  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <h2>{greeting && greeting.message}</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  greeting: state.greeting,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps, { fetchRandomGreeting })(Greeting);
