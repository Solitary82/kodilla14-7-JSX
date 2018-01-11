const ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form class={'contactForm'}>
        <label>Name:<input type="text" placeholder="name" value={this.props.contact.firstName}></input></label>
        <label>Surname:<input type="text" placeholder="surname" value={this.props.contact.lastName}></input></label>
        <label>Surname:<input type="email" placeholder="email" value={this.props.contact.email}></input></label>
        <button type="submit">Add a contact</button>
      </form>
      )
    )
  },
})
