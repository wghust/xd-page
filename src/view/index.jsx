import FooterCon from 'components/footer/index';
import PopCon from 'components/pop/index';
import Button from '@tbj/wheel/components/button';

import './index.styl';
import imgOne from '../images/22.png';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    return (
      <div>
        <div className='innerContainer' style={{ top: '0px', bottom: '37px' }}>
          <div className='imgCon'>
            <img src={imgOne} />
          </div>
          <div style={{ width: '90%', 'margin': '0 auto' }}>
            <Button></Button>
          </div>
        </div>
        <FooterCon />
        <PopCon show={this.state.show} hide={() => { this.setState({ show: false }); }} />
      </div>
    );
  }
}

export default Index;