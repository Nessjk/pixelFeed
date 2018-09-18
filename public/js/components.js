// Define a new component called button-counter
Vue.component('buttonCounter', {
    props: {
        icon: String,
        title: String,
        size: String
       },
    name: 'buttonCounter',
    data: function () {
      return {
        count: 0
      }
    },
    template: `
    <div class="selectInput" size>
        <div class="selectInput__content">
        
            <div class="icon">
                <i>
                <slot name="icon">
                    {{icon}}
                </slot>            
                </i>
            </div>
            <div class="selectInput__title">
                <slot name="title">
                    <p> {{title}} </p>
                </slot>
            </div>
        </div>
    </div>`,

  })