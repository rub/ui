**Modals** communicate information via a secondary window and allow the user to maintain the context of a particular task.

Use the Modal Wrapper component to encapsulate your Modal within a button.

Modal is forked from [Carbon Components](https://www.carbondesignsystem.com/components/modal/code) 

### Usage

```js
import { Modal } from  '@wfp/ui';
```
#### Manual footer

If you use the `passive={true}`prop you can add a custom Footer
```js
<div  className="wfp--modal-footer">
	<div  className="wfp--modal__buttons-container">
		The Modal Footer content
	</div>
</div>
```

#### Handle the `open` state

Modal allows you to control the `open` State on your own. Use the Modal Wrapper component to use a controlled version of Modal.

```js
class ModalWithControls extends React.Component {
  state = { open: false };

  toggleModal = () => {
    console.log('Toggle the open state');
    this.setState(state => ({
      open: !state.open
    }));
  }

  submitAndClose = () => {
    alert('Submit now and close the modal');
    this.setState(state => ({
      open: false
    }));
  }

  render(){
    const { open } = this.state;

    return (
      <div>
        <button onClick={this.toggleModal}>
          Open Modal
        </button>
        <Modal
          open={open}
          primaryButtonText="Submit"
          onRequestSubmit={this.submitAndClose}
          secondaryButtonText="Cancel Modal"
          onSecondarySubmit={this.toggleModal}
          onRequestClose={this.toggleModal}
        >
        <p className="wfp--modal-content__text">
          Nothing to see here
        </p>
        </Modal>
      </div>
    );
  }
}
```