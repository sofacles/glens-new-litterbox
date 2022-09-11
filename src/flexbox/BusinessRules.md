ItemFlexShortcutEditableDisplay is a list showing the styles being used for each _item_ in a text box that lets you edit the styles indvidually. The flex style of the container in TheList is still managed by Driver.jsx. When you edit one of these styles, dispatch "UPDATE_FLEX_AT_INDEX" and TheList should be updated accordingly.

TheList is a list of cards of the elements of the periodic table. It uses the styles that are shown in ItemFlexShortcutEditableDisplay.

useFlexAndDataReducer exposes a state object which is an array of objects that look like:
{
physicalData: datum,
flex: defaultItemStyle,
}

Test cases
Start with the 4 defaults and update one of their styles

It seems to me that it's dumb to have an initialize method because the place where you call useReducer has to be a React component. If you make Initialize a React component, then what should it return? The context provider? If that's the case, then really "initialize" is just a constructor for your hook.
Wait, are the initializing arguments to my constructor supposed to be optional? If so, what is the default value? The 4 starting elements? That would reset the state in my hook every time it was used by any other consumers of the hook. I export both the context AND the context.provider.

OK fuck it. I am deciding AGAIN not to have an initialize value. It's not that great a pattern. It's not worth the trouble. I will have FlexAndDataContext get elements from the file and have an initial value.

OK, I'm re-doing the stuff I lost on my old macbook and I'm going to rename FlexAndDataContext to ItemFlexContext and then move whatever stuff pertains to the container into a new ContainerFlexContext
