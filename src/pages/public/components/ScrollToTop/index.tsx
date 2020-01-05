import { IRouteProps, WithRouter } from '../../../../decorators/withRouter';
import { Component } from 'react';

@WithRouter()
export default class ScrollToTop extends Component<IRouteProps, {}> {
   componentDidUpdate(prevProps: IRouteProps) {
      if (this.props.location !== prevProps.location) {
         window.scrollTo(0, 0);
      }
   }

   render() {
      return this.props.children;
   }
}
