const EffectBackground = (backgroundSRC,stylesInput) => {
    useEffect(() => {
        document.body.style.backgroundImage = `url(${backgroundSRC})`;
        document.body.className =stylesInput;
      }, [backgroundSRC,stylesInput]);
    }
    export default EffectBackground;