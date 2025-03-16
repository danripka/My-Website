import flask
import werkzeug.exceptions

app = flask.Flask(__name__)


@app.route("/")
def index():
    return flask.render_template("index.html")


@app.route("/projects")
def projects():
    return flask.render_template("projects.html")


@app.route("/about")
def about():
    return flask.render_template("about.html")


@app.route("/resume")
def resume():
    return flask.send_file("documents\\resume.pdf", as_attachment=False)


@app.route("/contact")
def contact():
    return flask.render_template("contact.html")


@app.errorhandler(werkzeug.exceptions.HTTPException)
def page_not_found(error):
    return flask.render_template("error.html", error_code=error.code, error_name=error.name), error.code


if __name__ == "__main__":
    app.run(debug=False)
