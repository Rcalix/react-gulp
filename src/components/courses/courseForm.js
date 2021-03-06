"use strict";

var React = require('react');
var Input = require('../common/textInput');
var CourseForm = React.createClass({
    propTypes: {
        course: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },
    render: function() {
        return (
            <form>
                <h1>Manage Course</h1>
                <Input 
                    name="title"
                    label="Tile"
                    value={this.props.course.title}
                    onChange={this.props.onChange}
                    error={this.props.errors.title}/>
                    
                  <Input 
                    name="category"
                    label="category"
                    value={this.props.course.category}
                    onChange={this.props.onChange} 
                    error={this.props.errors.category}/>

                  <Input 
                    name="length"
                    label="length"
                    value={this.props.course.length}
                    onChange={this.props.onChange} 
                    error={this.props.errors.length}/>

                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
            </form>
        );
    }
});

module.exports = CourseForm;