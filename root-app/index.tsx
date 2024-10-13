import { registerRootComponent } from 'expo';
import App from '../app/(tab)/index'; 
import * as Sentry from '@sentry/react-native';

Sentry.init({
    dsn: "https://6dd4103d644623c12cb0ae49079cb047@o4508117735374848.ingest.us.sentry.io/4508117738389504",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for tracing.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
  _experiments: {
    // profilesSampleRate is relative to tracesSampleRate.
    // Here, we'll capture profiles for 100% of transactions.
    profilesSampleRate: 1.0,
  },
  });

registerRootComponent(App);
