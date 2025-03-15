import flask

app = flask.Flask(__name__)


@app.route("/")
def index():
    return flask.render_template("index.html")


@app.route("/about")
def about():
    return flask.render_template("about.html")


@app.route("/projects")
def projects():
    return flask.render_template("projects.html")


@app.errorhandler(Exception)
def page_not_found(error):
    return flask.render_template("error.html", code=error.code, description=error.description), error.code


if __name__ == "__main__":
    app.run(debug=False)
