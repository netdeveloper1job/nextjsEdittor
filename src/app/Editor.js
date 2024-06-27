// components/MyEditor.js
'use client' // only in App Router

import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Heading, Undo, Underline, Alignment, HtmlEmbed, Highlight, HorizontalLine, Superscript, Subscript, Strikethrough, Code, BlockQuote, CodeBlock, FindAndReplace, FontSize, FontFamily, FontColor, FontBackgroundColor, Indent, TextPartLanguage, Link } from 'ckeditor5';
import React, { useState, useEffect } from 'react';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

function MyEditor() {
    const [editorData, setEditorData] = useState(() => {
        const savedData = localStorage.getItem('editorData');
        return savedData ? savedData : '<p>Hello from CKEditor 5!</p>';
    });

    useEffect(() => {
        localStorage.setItem('editorData', editorData);
    }, [editorData]);
    return (
        <div>
            <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
                onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setEditorData(data);
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
                config={{
                    toolbar: {
                        items: [
                            'undo',
                            'redo',
                            '|',
                            'bold',
                            'italic',
                            'underline',
                            '|',
                            'Heading',
                            'alignment',
                            'htmlEmbed',
                            'Highlight',
                            'HorizontalLine',
                            'Superscript',
                            'Subscript',
                            'Strikethrough',
                            'Code',
                            'BlockQuote',
                            'CodeBlock',
                            'FindAndReplace',
                            'FontSize',
                            'FontFamily',
                            'FontColor',
                            'FontBackgroundColor',
                            'Indent',
                            'TextPartLanguage',
                            'Link',
                        ]
                    },
                    plugins: [
                        Bold,
                        Essentials,
                        Italic,
                        Heading,
                        Undo,
                        Underline,
                        Alignment,
                        HtmlEmbed,
                        Highlight,
                        HorizontalLine,
                        Superscript,
                        Subscript,
                        Strikethrough,
                        Code,
                        BlockQuote,
                        CodeBlock,
                        FindAndReplace,
                        FontSize,
                        FontFamily,
                        FontColor,
                        FontBackgroundColor,
                        Indent,
                        TextPartLanguage,
                        Link
                    ],
                    mention: {},
                    initialData: editorData
                }}
            />
            <div style={{ marginTop: '20px' }}>
                <h3>Editor Data Saved in Local Storage:</h3>
                <div dangerouslySetInnerHTML={{ __html: editorData }} />
            </div>
        </div>
    );
}

export default MyEditor;
