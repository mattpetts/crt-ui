import styles from './Block.module.css'

interface BlockProps {
    children: React.ReactNode;
    theme?: 'default' | 'warning' | 'error'
}

export default function Block({ 
    children,
    theme = 'default'
}: BlockProps) {
    const classes = [
        styles.block,
        styles[`block--theme-${theme}`]
    ].join(' ');

    return (
        <div className={ classes }>
            {children}
        </div>
    )
}
