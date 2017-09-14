import { observable, action } from 'mobx';


class ObservableMatchStore {
	@observable matches = [];

	@action addMatch (item) { this.matches[0] = (item) }

}


const MatchStore = new ObservableMatchStore()

export default MatchStore;