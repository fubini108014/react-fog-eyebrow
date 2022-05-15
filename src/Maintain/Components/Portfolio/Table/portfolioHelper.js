export function renderImage(file) {
    if (!file) return null;

    let genSrc = "";
    if (typeof file === "string") {
        genSrc = `../Images/${file}`;
    } else {
        genSrc = URL.createObjectURL(file);
    }

    return (
        <img
            src={genSrc}
            style={{ height: 160, width: "100%", margin: "3px 0" }}
            alt="img file"
        />
    );
}
