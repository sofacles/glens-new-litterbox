So, the pattern I have in PaintDonor for the third color context is that I export a type from my module that contains the context and two other things:

export const ThirdColorContext = createContext<ThirdColorContextValue>([
{ thirdColorLevel: 7, selectedHexValue: '777' },
() => new console.error("can't use a ThirdColorContextValue outside of a provider"),
]);

export const ThirdColorProvider: React.FC<React.ReactNode> = ({ children }) => {
const [state, setState] = useState<ThirdColorInfo>({
thirdColorLevel: 7,
selectedHexValue: '777',
});

    return <ThirdColorContext.Provider value={[state, setState]}>
            {children}
            </ThirdColorContext.Provider>;

};

and components can use it like this:
const [thirdColorContext, setThirdColorContext] = useContext(ThirdColorContext);

and when they want to update the state, they have to do it like:

setThirdColorContext({...thirdColorContext, thirdColorLevel: 13})

The provider is really a React component.
