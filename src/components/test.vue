<div id="app" class="ui vertical stripe segment">
  <div class="ui container">
    <div id="content" class="ui basic segment">
      <h3 class="ui header">List of Users</h3>
      <vuetable api-url="http://example.app:3000/api/" table-wrapper="#content" :fields="columns" :item-actions="itemActions"></vuetable>
    </div>
  </div>
</div>

<script>
  export default {
    name: 'test',
    data() {
      return {
        columns: [
          'Semestre',
          'Branche',
          'Note',
          'Actions'
        ],
        itemActions: [
          { name: 'view-item', label: '', icon: 'zoom icon', class: 'ui teal button' },
          { name: 'edit-item', label: '', icon: 'edit icon', class: 'ui orange button' },
          { name: 'delete-item', label: '', icon: 'delete icon', class: 'ui red button' }
        ],
        methods: {
          viewProfile: function (id) {
            console.log('view profile with id:', id)
          }
        },
        events: {
          'vuetable:action': function (action, data) {
            console.log('vuetable:action', action, data)
            if (action == 'view-item') {
              this.viewProfile(data.id)
            }
          },
          'vuetable:load-error': function (response) {
            console.log('Load Error: ', response)
          }
        },
        items: [
          { semestre: 1, branche: 'maths', note: 5 },
          { semestre: 2, branche: 'allemand', note: 4.5 }
        ]
      }
    }
  }
  new Vue({
    el: '#app',
    data: {


    },

  })

</script>