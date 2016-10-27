import Ember from 'ember';

export default Ember.Component.extend({
  isWide: false,
  updateRentalForm: false,
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    },
    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    },
    update(rental, params) {
      this.sendAction('update', rental, params);
    }
  }
});
