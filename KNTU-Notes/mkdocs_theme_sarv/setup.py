from setuptools import setup, find_packages

setup(
    name="mkdocs-theme-sarv",
    version="0.1.0",
    description="A modern, authentic MkDocs theme based on Sarv UI with Obsidian syntax & Graph View",
    author="MJ",
    author_email="mjb4khshi@gmail.com",
    url="https://github.com/mjb4khshi/mkdocs-theme-sarv",
    packages=["mkdocs_theme_sarv"],
    package_dir={"mkdocs_theme_sarv": "."},
    package_data={
        "mkdocs_theme_sarv": [
            "mkdocs_theme.yml",
            "*.html",
            "templates/*.html",
            "templates/partials/*.html",
            "assets/css/*.css",
            "assets/js/*.js",
            "assets/fonts/*",
        ]
    },
    include_package_data=True,
    entry_points={
        "mkdocs.themes": [
            "sarv = mkdocs_theme_sarv",
        ]
    },
    install_requires=[
        "mkdocs>=1.5.0",
        "pymdown-extensions>=10.0",
    ],
)
