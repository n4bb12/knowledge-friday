- component anatomy
- export let, $$props and $$restProps https://svelte.dev/docs#Attributes_and_props
- {expressions} https://svelte.dev/docs#Text_expressions
- slot, slot name="name", slot="name", $$slots, slot {item}, slot let:item https://svelte.dev/docs#slot
- on:eventname|modifiers={handler} https://svelte.dev/docs#on_element_event
- bind:property={variable}, bind:duration, bind:group https://svelte.dev/docs#bind_element_property
- class, class:name={value} https://svelte.dev/docs#class_name
- style=""
- createEventDispatcher https://svelte.dev/docs#createEventDispatcher
- context=module https://svelte.dev/docs#script_context_module
- @html https://svelte.dev/docs#html

- useState --> not needed https://svelte.dev/docs#2_Assignments_are_reactive
- useEffect --> onMount, onDestroy, beforeUpdate, afterUpdate, tick, or not needed https://svelte.dev/docs#Run_time
- useMemo --> $: https://svelte.dev/docs#3_$\_marks_a_statement_as_reactive
- useRef --> bind:this https://svelte.dev/docs#bind_element
- useCallback --> not needed
- useContext --> setContext, getContext, hasContext https://svelte.dev/docs#setContext
- global state --> svelte/store, writeable, readable, derived, get, $value https://svelte.dev/docs#svelte_store

- #if/elseif/else https://svelte.dev/docs#if
- #each, index, key https://svelte.dev/docs#each
- #await, then, catch https://svelte.dev/docs#await https://jsonplaceholder.typicode.com/todos

- svelte:self https://svelte.dev/docs#svelte_self
- svelte:component https://svelte.dev/docs#svelte_component
- svelte:window https://svelte.dev/docs#svelte_window
- svelte:body https://svelte.dev/docs#svelte_body
- svelte:head https://svelte.dev/docs#svelte_head
- svelte:options https://svelte.dev/docs#svelte_options
- svelte:fragment https://svelte.dev/docs#svelte_fragment

- #key https://svelte.dev/docs#key
- transition:fn|local={params} https://svelte.dev/docs#transition_fn
- in:fn|local={params}, out:fn|local={params} https://svelte.dev/docs#in_fn_out_fn
- animate:name={params} https://svelte.dev/docs#animate_fn
- svelte/transition https://svelte.dev/docs#svelte_transition
- svelte/animate https://svelte.dev/docs#svelte_animate
- svelte/motion https://svelte.dev/docs#svelte_motion
- svelte/easing https://svelte.dev/docs#svelte_easing
