# Bullets Diagramation

It is a context of elements that will render the lower levels of navigation within a list of bullets with images

![bullets-diagramation](https://github.com/SergioYepes/Itgloberspartnercl-bullets-diagramation/blob/master/docs/componentImage.png)

## Setting
### Step 1 - Cloning the repository

[Clone](https://github.com/vtex-apps/react-app-template) the react-app-template repository to start with the basics in terms of initial configuration, once on the github repository page; there is the option that says `Use this template`, to make a copy to our repository.

Then, access the repository directory using your terminal.

### Step 2 - edit the Manifest.json

Once in the repository directory, it's time to edit the react app template's `manifest.json` file.

Once in the file, you need to replace the `vendor`, `name`, `version`, `title`, and `description` values.
`vendor` is the name of the partner account you are working on
 `name` is the name of what your component will be called as a dependency
 `version` the initial version to start working with
 `title` component title that is not subject to as it is going to be declared as a dependency so it can be any title you want
 `description` small description of what the component is for
 
Example:

```json
{
  "vendor": "partner",
  "name": "name-component",
  "version": "0.0.x",
  "title": "Component Title",
  "description": "Short description of what the component is for",
  ...
}
```

### Step 3 - Configure the builder store

For the component to work correctly, the builder store must be declared in the `manifest.json`.

Example:

```json
{
  "builders": {
    ...
    "store": "0.x"
  },
  ...
}
```

After that you have to create a folder called store in the top folder of the component, that `store` folder will have a file called `interfaces.json`.

Example:

```json
{
  "name-component": { // The name that is declared in the manifest.json of the vtex app
    "component": "new-name", // The name of the component to be fed from
    "render": "client" // This property is set if it is only going to be used by the client
  }
}
```
### Step 4 - Declare required dependencies

In the `manifest.json` you must declare the dependencies that are going to be used in the desired component.

Example:

```json
...
"dependencies": {
  "vtex.dependencies": "0.x",
  "vtex.dependencies": "0.x"
},
...
```

### Step 5 - Edit the package.json

The first `package.json` is the global one, it is next to the `manifest.json`, we are going to change its `version` and `name`.
 
Example:

```json
{
  "version": "0.0.x",
  "name": "name-component",
  ...
}
```

And we will repeat the same process with the `package.json` inside the react folder.

### Step 6 - Install react dependencies

For this step you must enter the react folder, and once there you must execute the command in your console
```json
partner-name-componet/react> yarn
```
so that all necessary dependencies are installed

### Step 7 - Create Component

In the react folder you must create the file with which you are going to work, example: `name.tsx`, then create your components folder and start developing

### Step 8 - Run a store preview

Then it's time to upload all the changes you made to your local files to the platform. For that, use the `vtex link` command.

If the process runs without any errors, the following message will be displayed: `Application linked successfully`. Then run the `vtex browser` command to open a browser window that has your store linked to it.

This will allow you to see the changes applied in real time, across the account and workspace you are working on.


## Dependencies
1."vtex.native-types"
2. "vtex.list-context"
3. "vtex.device-detector"
4. "vtex.css-handles"

## Contributors
1. Sergio Yepes Gualteros
