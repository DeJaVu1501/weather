import './Variables.scss';

const ChangeScssVariables = theme => {
    const root = document.querySelector(':root');

    const variables = [
        'body-background',
        'components-background',
        'text-color'
    ]

    variables.forEach(component =>
        root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`)
    )
}

export default ChangeScssVariables
