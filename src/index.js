const initProject = async () => {
  const React = await import('react');
  const ReactDOM = await import('react-dom');
  const { Provider } = await import('react-redux');
  const { ConnectedRouter } = await import('connected-react-router/immutable');

  const { store, history } = await import('redux/configureStore');

  const { ErrorBoundry } = await import('components/ErrorBoundry');
  const { Intl } = await import('components/Intl');
  const { Theme } = await import('components/Theme');

  const { register } = await import('./registerServiceWorker');
  const { App } = await import('./App');

  ReactDOM.render(
    <ErrorBoundry>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Intl>
            <Theme>
              <App />
            </Theme>
          </Intl>
        </ConnectedRouter>
      </Provider>
    </ErrorBoundry>,
    document.getElementById('root')
  );
  register();
};

initProject();
