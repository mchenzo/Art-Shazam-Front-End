import { observable, action } from 'mobx';


class ObservableCameraRollStore {
	@observable images = [];

	@action addImage (item) { images.push(item) }

}


const CameraRollStore = new ObservableCameraRollStore()

export default CameraRollStore;