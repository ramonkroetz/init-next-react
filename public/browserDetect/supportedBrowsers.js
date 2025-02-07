var regexBrowsers = /Edge?\/([89]\d|\d{3,})\.\d+(\.\d+|)|Firefox\/(6[89]|[7-9]\d|\d{3,})\.\d+(\.\d+|)|Chrom(ium|e)\/(6[5-9]|[7-9]\d|\d{3,})\.\d+(\.\d+|)([\d.]+$|.*Safari\/(?![\d.]+ Edge\/[\d.]+$))|(Maci|X1{2}).+ Version\/(12\.([1-9]|\d{2,})|(1[3-9]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(5[2-9]|[6-9]\d|\d{3,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[7-9]|[3-9]\d|\d{3,})\.\d+/;
if (!regexBrowsers.test(navigator.userAgent)) {
    document.body.innerHTML = `
        <div style=\"position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1000; background-color: #000; color: #fff; padding: 20px; border-radius: 10px; width: 100%; height: 100%; text-align: center;\">
            <div style=\"font-size: 24px; font-weight: bold; top: 50%; left: 50%; transform: translate(-50%, -50%); position: absolute;\">Your browser is not supported. Please update your browser or use a different browser for a better experience.</div>
        </div>
    `
}
