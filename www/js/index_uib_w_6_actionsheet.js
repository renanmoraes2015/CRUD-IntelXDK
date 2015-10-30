function uib_w_6_actionsheet_controller($scope, $ionicActionSheet) {
  // Triggered on a button click, or some other target
  $scope.show = function() {
    // Show the action sheet
    $ionicActionSheet.show({
      buttons: [
        { text: '<b>Share</b> This' },
        { text: 'Move' }
      ],
      destructiveText: 'Delete',
      titleText: 'Modify your album',
      cancelText: 'Cancel',
      cancel: function() {
        // add cancel code..
      },
      buttonClicked: function(index) {
        return true;
      }
    });
  };

};